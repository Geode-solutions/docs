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

# class OpenGeodeIOModelException


```cpp
Inherits from OpenGeodeIOException
```



## Functions

### OpenGeodeIOModelException

```cpp
public void OpenGeodeIOModelException(any data, TYPE type, const Args &... message)
```


### exception

```cpp
public void exception(bool condition, DataProvider && data_provider, TYPE type, MessageProvider && message_provider)
```


### assertion

```cpp
public void assertion(Condition && condition, MessageProvider && message_provider)
```


### test

```cpp
public void test(bool condition, const Args &... message)
```




