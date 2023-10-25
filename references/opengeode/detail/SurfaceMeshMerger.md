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

# class SurfaceMeshMerger


```cpp
Inherits from VertexMerger<SurfaceMesh<2U> >
```



# class SurfaceMeshMerger


```cpp
Inherits from VertexMerger<SurfaceMesh<dimension> >
```



## Records

PolygonOrigin



## Functions

### SurfaceMeshMerger

```cpp
public void SurfaceMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces, double epsilon)
```


### ~SurfaceMeshMerger

```cpp
public void ~SurfaceMeshMerger<dimension>()
```


### merge

```cpp
public int merge()
```


### polygon_in_merged

```cpp
public index_t polygon_in_merged(index_t surface, index_t polygon)
```


### polygon_origins

```cpp
public const int & polygon_origins(index_t polygon)
```




# class SurfaceMeshMerger


```cpp
Inherits from VertexMerger<SurfaceMesh<3U> >
```



