# class Singleton

```cpp
Defined at ../../include/geode/basic/singleton.h#52
```

  Cross platform singleton implementation  Classic templated singleton cannot be exported on Windows.  To ensure a unique instance of the singleton, we store it and  export methods to retrieve the unique instance.

  To use this class, inherit from it and use the protected  method Singleton::instance().



## Functions

### Singleton

```cpp
public void Singleton(const Singleton & )
```

```cpp
Defined at ../../include/geode/basic/singleton.h#54
```

### operator=

```cpp
public Singleton & operator=(const Singleton & )
```

```cpp
Defined at ../../include/geode/basic/singleton.h#54
```

### Singleton

```cpp
public void Singleton(Singleton && )
```

```cpp
Defined at ../../include/geode/basic/singleton.h#54
```

### operator=

```cpp
public Singleton & operator=(Singleton && )
```

```cpp
Defined at ../../include/geode/basic/singleton.h#54
```

### ~Singleton

```cpp
public void ~Singleton()
```

```cpp
Defined at /github/workspace/src/geode/basic/singleton.cpp#63
```

### Singleton

```cpp
protected void Singleton()
```

```cpp
Defined at /github/workspace/src/geode/basic/singleton.cpp#61
```

### instance

```cpp
protected SingletonType & instance()
```

```cpp
Defined at ../../include/geode/basic/singleton.h#63
```



