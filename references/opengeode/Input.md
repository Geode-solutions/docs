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

# class Input


```cpp
Inherits from IOFile
```



## Records

AdditionalFile

AdditionalFiles



## Functions

### additional_files

```cpp
public AdditionalFiles additional_files()
```

### is_loadable

```cpp
public bool is_loadable()
```


### read

```cpp
public Object read(const Args &... args)
```

### ~Input

```cpp
public void ~Input<Object, Args...>()
```


### Input

```cpp
protected void Input<Object, Args...>(basic_string_view filename)
```


### need_to_inspect_result

```cpp
protected void need_to_inspect_result()
```




