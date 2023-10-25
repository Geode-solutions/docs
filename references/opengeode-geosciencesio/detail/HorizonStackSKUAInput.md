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

# class HorizonStackSKUAInput


```cpp
Inherits from HorizonsStackInput<3U>
```



# class HorizonStackSKUAInput


```cpp
Inherits from HorizonsStackInput<2U>
```



# class HorizonStackSKUAInput


```cpp
Inherits from HorizonsStackInput<dimension>
```



## Functions

### HorizonStackSKUAInput

```cpp
public void HorizonStackSKUAInput<dimension>(string_view filename)
```


### extension

```cpp
public string_view extension()
```


### read

```cpp
public HorizonsStack<dimension> read()
```




