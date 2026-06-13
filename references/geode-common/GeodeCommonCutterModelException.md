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

# class GeodeCommonCutterModelException


```cpp
Inherits from GeodeCommonException
```



## Functions

### GeodeCommonCutterModelException

```cpp
public void GeodeCommonCutterModelException(std::any data, TYPE type, const Args &... message)
```


### assertion

```cpp
public static void assertion(Condition && condition, MessageProvider && message_provider)
```


### exception

```cpp
public static void exception(bool condition, DataProvider && data_provider, TYPE type, MessageProvider && message_provider)
```


### test

```cpp
public static void test(bool condition, const Args &... message)
```




