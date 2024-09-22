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

# class PolygonOrchestrator


```cpp
Inherits from InserterOrchestrator
```



## Functions

### PolygonOrchestrator

```cpp
public void PolygonOrchestrator(class BackgroundSolidInserter::Impl & inserter, ProgressLogger & logger, const TriangulatedSurface3D & surface_mesh)
```


### insert_vertices

```cpp
public void insert_vertices(Span elements)
```




