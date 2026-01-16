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

# struct BlockElement


## Members

```cpp
public const Block3D & block

```

```cpp
public ElementId element_id

```



## Functions

### BlockElement

```cpp
public void BlockElement<ElementId>(const Block3D & block_in, ElementId element)
```


### operator==

```cpp
public bool operator==(const BlockElement<ElementId> & other)
```


### string

```cpp
public typename std::enable_if<std::is_arithmetic<T>::value, std::string>::type string()
```


### string

```cpp
public typename std::enable_if<!std::is_arithmetic<T>::value, std::string>::type string()
```




