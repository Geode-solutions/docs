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
public void SurfaceMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces)
```


### SurfaceMeshMerger

```cpp
public void SurfaceMeshMerger<dimension>(SurfaceMeshMerger<dimension> && )
```


### ~SurfaceMeshMerger

```cpp
public void ~SurfaceMeshMerger<dimension>()
```


### merge

```cpp
public std::unique_ptr<SurfaceMesh<dimension> > merge(double epsilon)
```


### merge

```cpp
public std::unique_ptr<SurfaceMesh<dimension> > merge(const Frame<dimension> & epsilons_frame)
```


### polygon_in_merged

```cpp
public index_t polygon_in_merged(index_t surface, index_t polygon)
```


### polygon_origins

```cpp
public const PolygonOrigins & polygon_origins(index_t polygon)
```




# class SurfaceMeshMerger


```cpp
Inherits from VertexMerger<SurfaceMesh<3U> >
```



