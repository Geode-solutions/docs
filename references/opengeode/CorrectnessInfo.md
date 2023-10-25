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

# struct CorrectnessInfo


## Members

```cpp
public std::pair<bool, Intersection> first

```

```cpp
public std::pair<bool, Intersection> second

```



## Functions

### CorrectnessInfo

```cpp
public void CorrectnessInfo<Intersection>()
```


### CorrectnessInfo

```cpp
public void CorrectnessInfo<Intersection>(const Intersection & intersection)
```




