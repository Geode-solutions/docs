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

# class BackgroundLineModifier


```cpp
Inherits from EdgedCurveModifier1D
```



## Functions

### BackgroundLineModifier

```cpp
public void BackgroundLineModifier(const BackgroundLine & mesh, BackgroundLineBuilder & builder)
```


### ~BackgroundLineModifier

```cpp
public void ~BackgroundLineModifier()
```


### split_edge

```cpp
public SplitEdgeInfo split_edge(index_t edge, const Point1D & point)
```


### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(index_t edge, const Point1D & point)
```


### clean

```cpp
public CleanMappings clean()
```


### BackgroundLineModifier

```cpp
public void BackgroundLineModifier(const VertexSet & line, VertexSetBuilder & builder, MeshModifierFactoryKey key)
```




