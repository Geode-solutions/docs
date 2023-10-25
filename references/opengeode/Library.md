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

# class Library


```cpp
Inherits from Singleton
```



## Functions

### ~Library

```cpp
public void ~Library()
```


### Library

```cpp
protected void Library()
```


### call_initialize

```cpp
protected void call_initialize(const char * library_name)
```




