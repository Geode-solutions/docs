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

# class MacroInfoBuilder2D


```cpp
Inherits from MacroInfoBuilder, MacroEdgesBuilder
```



## Functions

### ~MacroInfoBuilder2D

```cpp
public void ~MacroInfoBuilder2D()
```


### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitTriangleInfo & split_info)
```


### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitPolygonEdgeInfo & split_info)
```


### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::CollapseEdgeInfo & collapse_info)
```


### update_vertex

```cpp
public void update_vertex(const VertexMultiMapping & mapping)
```


### MacroInfoBuilder2D

```cpp
protected void MacroInfoBuilder2D(BackgroundSurface & background)
```




