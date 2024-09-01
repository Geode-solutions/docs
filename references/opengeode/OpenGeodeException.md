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

# class OpenGeodeException


 OpenGeode exception class. Example:       throw OpenGeodeException{ "Error while loading the BRep" };

       try {          ...       }       catch( ... )       {           return geode_lippincott();       }



```cpp
Inherits from runtime_error
```



## Functions

### OpenGeodeException

```cpp
public void OpenGeodeException(const Args &... message)
```


### ~OpenGeodeException

```cpp
public void ~OpenGeodeException()
```


### stack_trace

```cpp
public basic_string stack_trace()
```




