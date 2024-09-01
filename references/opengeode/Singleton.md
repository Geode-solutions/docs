<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

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




