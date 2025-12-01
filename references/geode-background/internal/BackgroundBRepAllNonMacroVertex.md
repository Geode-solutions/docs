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

# class BackgroundBRepAllNonMacroVertex


```cpp
Inherits from BackgroundBRepDecimatorOperator
```



## Functions

### BackgroundBRepAllNonMacroVertex

```cpp
public void BackgroundBRepAllNonMacroVertex(const BackgroundBRep & background)
```


### skip_edge

```cpp
public bool skip_edge(const Block3D & block, const std::array<index_t, 2> & edge)
```




