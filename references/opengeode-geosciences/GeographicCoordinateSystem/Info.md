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

# struct Info


## Members

```cpp
public basic_string authority

```

```cpp
public basic_string code

```

```cpp
public basic_string name

```



## Functions

### Info

```cpp
public void Info(basic_string authority_in, basic_string code_in, basic_string name_in)
```


### Info

```cpp
public void Info()
```


### authority_code

```cpp
public basic_string authority_code()
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




