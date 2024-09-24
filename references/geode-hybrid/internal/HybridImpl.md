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

# class HybridImpl


## Functions

### HybridImpl

```cpp
public void HybridImpl(const class FrameFieldParameterization::ExtractedElements & elements)
```


### unique_vertices_mapping

```cpp
public BijectiveMapping<index_t> & unique_vertices_mapping()
```


### elements

```cpp
public const class FrameFieldParameterization::ExtractedElements & elements()
```




