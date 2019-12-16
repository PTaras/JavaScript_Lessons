class Transaction {
    constructor() {
        this.resultLog = [];
    };

    store = () => {
        const map = new Map([
            ['name', 'Taras'],
            ['password', '12345'],
            ['phone', '555-555-555'],
            ['server response', '503']
        ]);

        return map;
    };
    logs = (result) => {

        if (result === undefined) {
            return this.resultLog;
        }

        this.resultLog.push(result);

        return this.resultLog;
    };
    status = (code) => {

        if (code === undefined) {
            return this.codeLog;
        }
        this.codeLog = code;
        return this.codeLog;
    };
    dispatch = async (scenario) => {
        scenario.forEach((element, step) => {
            // console.log('dispatch', step)
            element.call(this.store, this.logs).then((resolve) => {
                let result = {};
                result.index = element.index;
                result.meta = element.meta;
                result.stepResult = resolve;
                result.error = null;
                this.logs(result);
            },
                (reject) => {
                    // console.log('reject', step)
                    this.rollback(scenario, step);
                    let result = {};
                    result.index = element.index;
                    result.meta = element.meta;
                    result.nextStep = null;
                    result.error = {
                        'name': reject.name,
                        'message': reject.message,
                        'stack': reject.stack,
                    };
                    this.logs(result);
                }
            );
        });

        this.status('Успешно выполнена');
        await this.logs;
    };
    rollback = async (scenario) => {
        scenario.reverse().forEach((element) => {
            // console.log('dispatch', this.store)
            element.restore(this.store, this.logs).then((resolve) => {
                let result = {};
                result.index = element.index;
                result.meta = element.meta;
                result.nextStep = resolve;
                result.error = null;
                this.logs(result);
                this.status('Yспешно восстановлена');
            },
                (reject) => {
                    this.status('Неуспешно восстановлена');
                }
            );
        })
        await this.logs;
    };
}
function log(data) { console.log('log', data()) }

const scenario = [
    {
        index: 1,
        meta: {
            title: 'Form authorization.',
            description: 'Authorization scenario',
        },
        async call(store, logs) {
            // Логика выполнения шага
            // console.log('1call', store, logs);
            if (store().get('name') !== undefined && store().get('password') !== undefined && store().get('phone') !== undefined) {
                const stepResult = { 'step': 'Authorization successfully' };

                return stepResult;
            }
            throw new Error('Authorization error!');
        },
        async restore(store, logs) {
            // Логика отката шага  
            // console.log('1restore', store, logs)
            if (store().get('name') !== 'undefined'
                && store().get('password') !== 'undefined'
                && store().get('phone') !== 'undefined') {

                const nextStep = { 'step': 'restore step 1' };
                return nextStep;
                throw new Error('restore step 1');
            }
            throw new Error('restore step 1 Error');
        },
    },
    {
        index: 2,
        meta: {
            title: 'Input validation',
            description:
                'Validation scenario.',
        },
        async call(store, logs) {
            // Логика выполнения шага
            // console.log('2call', store, logs)
            if (store().get('name') === 'Taras'
                && store().get('password') === '12345'
                && store().get('phone') === '555-555-555') {

                const stepResult = { 'step': 'Validation successfully!' };

                return  stepResult;
            }
            throw new TypeError('Validation error!');
        },
        async restore(store, logs) {
            // console.log('2restore', store, logs)
            // Логика отката шага
            if (store().get('name') !== 'Taras'
                && store().get('password') !== '12345'
                && store().get('phone') !== '555-555-555') {
                // throw  new Error('restore step 2');
                const nextStep = {'step': 'first step'};

                return  nextStep;
            }
            throw  new Error('restore step 2 Error');
        },
    },
    {
        index: 3,
        meta: {
            title: 'Form submission.',
            description:
                'Submitting the form to the server',
        },
        async call(store, logs) {
            // Логика выполнения шага
            // console.log('2call', store, logs)
            if (store().get('server response') === '200') {

                const nextStep = { 'step': 'Data Submission Successful!' };

                return  nextStep;
            }
            throw new TypeError('Data Submission error!');
        },
        async restore(store, logs) {
            // console.log('2restore', store, logs)
            // Логика отката шага
            if (store().get('server response') === '200') {
                throw  new Error('restore step 3');
                const nextStep = {'step': 'second step'};

                return  nextStep;
            }
            throw  new Error('restore step 3 Error');
        },
    },
];
const transaction = new Transaction();
(async () => {
    try {
        await transaction.dispatch(scenario);
        const { store, logs, status } = transaction;
        log(store);
        log(logs);
        log(status);
    } catch (error) {
        console.log('error', error)
        // Send email about broken transaction
    }
})();