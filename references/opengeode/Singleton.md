# class Singleton


  Cross platform singleton implementation  Classic templated singleton cannot be exported on Windows.  To ensure a unique instance of the singleton, we store it and  export methods to retrieve the unique instance.

  To use this class, inherit from it and use the protected  method Singleton::instance().



## Functions

### Singleton

```cpp
public void Singleton(const Singleton & )
```


### operator=

```cpp
public Singleton & operator=(const Singleton & )
```


### Singleton

```cpp
public void Singleton(Singleton && )
```


### operator=

```cpp
public Singleton & operator=(Singleton && )
```


### ~Singleton

```cpp
public void ~Singleton()
```


### Singleton

```cpp
protected void Singleton()
```


### instance

```cpp
protected SingletonType & instance()
```




