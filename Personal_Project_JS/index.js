class Transaction {
    constructor(scenario) {
        this.status = 's';
        this.resultLog = []
    };

    store = () => {
        const map = new Map([
            ['name', 'Tarass'],
            ['password', '12345'],
            ['phone', '555-555-555']
        ]);

        return map;
    };
    logs = (maxs) => {
        // console.log(this.resultLog)
        this.resultLog.push(maxs)

        return this.resultLog;
    };
    dispatch = async (scenario) => {

        // console.log(scenario)
        // for (let i=0; i<scenario.length; i+=1){
        //     console.log(scenario[i])
        // }
        // console.log(this)
        scenario.forEach((element, step) => {
            console.log('dispatch', step)
            element.call(this.store, this.logs).then((resolve) => {
                let result = {};
                console.log('Успешно Успешно выполнена')
                result.index = element.index;
                result.meta = element.meta;
                result.stepResult = resolve;
                result.error = null;
                // console.log(element)
                this.logs(result);
                
                // console.log(this.logss)
            },
                (reject) => {
                    console.log('rject', step)

                    // console.log("reject:" + reject);
                    this.rollback(scenario, step);
                    let result = {};
                    result.index = element.index;
                    result.meta = element.meta;
                    result.nextStep = reject;
                    result.error = reject;
                    this.logs(result);
                }
            );
        });
        await this.logs;
    };
    rollback = async (scenario, step) => {
        scenario.reverse().forEach((element, step) => {
            // console.log('dispatch', this.store)
            element.restore(this.store, this.logs).then((resolve) => {
                let result = {};
                console.log('Успешно восстановлена')
                result.index = element.index;
                result.meta = element.meta;
                result.stepResult = resolve;
                result.error = null;
                // console.log(element)
                this.logs(result);
                // console.log(this.logss)
            },
                (reject) => {
                    console.log('Неуспешно восстановлена')

                    // console.log("reject:" + reject);
                    // this.rollback(scenario, step);
                    let result = {};
                    result.index = element.index;
                    result.meta = element.meta;
                    result.nextStep = reject;
                    result.error = reject;
                    this.logs(result);
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
            title: 'Authorization.',
            description: 'Authorization scenario',
        },
        async call(store, logs) {
            // Логика выполнения шага
            // console.log('1call', store, logs)
            //  console.log('name', store().get('name'))
            if (store().get('name') !== undefined && store().get('password') !== undefined && store().get('phone') !== undefined) {
                console.log('if')
                // store()
                // console.log(store().get('name'))
                console.log(store().get('name') !== 'undefined')
                // const stepResult = {'a':'s'};

                return await 'a';
            }
            throw new Error('oups')
            // return await rollback();
        },
        async restore(store, logs) {
            // Логика отката шага            
            // console.log('1restore', store, logs)
            if (store().get('name') !== 'undefined'
                && store().get('password') !== 'undefined'
                && store().get('phone') !== 'undefined') {

                // const stepResult = null;
                    throw await new Error('restore 1')
                // return rollback();
            }
            throw await new Error('restoreError');
        },
    },
    {
        index: 2,
        meta: {
            title: 'Validation.',
            description:
                'Validation scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            // Логика выполнения шага
            // console.log('2call', store, logs)
            if (    store().get('name')      === 'Taras' 
                &&  store().get('password')  === '12345' 
                &&  store().get('phone')     === '555-555-555') {

                const stepResult = {'a':'s'};

                return awaitstepResult;
            }
            throw new Error('Ошибка выполнения шага');
        },
        async restore(store, logs) {
            // console.log('2restore', store, logs)
            // Логика отката шага
            if (    store().get('name')      !== 'Taras' 
                &&  store().get('password')  !== '12345' 
                &&  store().get('phone')     !== '555-555-555') {
                throw await new Error('restoreError')
                const stepResult = null;

                return awaitstepResult;
            }
            throw await new Error('restoreError1')
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
        // log(status);
    } catch (error) {
        console.log('error', error)
        // Send email about broken transaction
    }
})();
// console.log(transaction.store());
// console.log(transaction.logs());
// console.log(transaction.logs());
