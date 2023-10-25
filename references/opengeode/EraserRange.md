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

# class EraserRange


## Functions

### EraserRange

```cpp
public void EraserRange<Type>(std::vector<Type> & values)
```


### begin

```cpp
public const EraserRange<Type> & begin()
```


### end

```cpp
public const EraserRange<Type> & end()
```


### operator*

```cpp
public Type && operator*()
```




