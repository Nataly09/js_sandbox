export default class Emitter {
    static on(target, eventName, handler){
        if (!Emitter.subscriptions)
            Emitter.subscriptions = {};

        if (!(eventName in Emitter.subscriptions)){
            Emitter.subscriptions[eventName] = {
                handlers : [],
            };
        }

        Emitter.subscriptions[eventName].handlers.push({
            method : handler,
            target
        });
    }

    static emit(eventName, ...args){
        if (!Emitter.subscriptions)
            Emitter.subscriptions = {};

        if (eventName in Emitter.subscriptions){
            Emitter.subscriptions[eventName].handlers.forEach((h) => 
                h.method.apply(h.target, [...args]));
        }
    }

    static off(target, eventName){
        if (!Emitter.subscriptions)
            Emitter.subscriptions = {};
            
        if (eventName in Emitter.subscriptions){
            Emitter.subscriptions[eventName].handlers = 
            Emitter.subscriptions[eventName].handlers.filter((h) => h.target !== target);
        }
    }
}