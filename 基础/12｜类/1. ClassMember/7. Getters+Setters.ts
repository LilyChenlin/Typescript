// Getters/Setters
// 存取器
// 如果 get 存在而 set 不存在，属性会被自动设置为 readonly
// 如果 setter 参数的类型没有指定，它会被推断为 getter 的返回类型
// getters 和 setters 必须有相同的成员可见性（Member Visibility (opens new window)）
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}

// 存取器在读取和设置的时候可以使用不同的类型
class Thing {
    _size = 0;
    
    // 注意这里返回的是 number 类型
    get size(): number {
        return this._size;
    }
    
    // 注意这里允许传入的是 string | number | boolean 类型
    set size(value: string | number | boolean) {
        let num = Number(value);
    
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
        this._size = 0;
        return;
        }
    
        this._size = num;
    }
}
