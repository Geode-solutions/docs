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

# class SurfaceRemesher


## Members

```cpp
public static const auto dimension

```



# class SurfaceRemesher


## Members

```cpp
public static const auto dimension

```



## Functions

### SurfaceRemesher

```cpp
public void SurfaceRemesher<Data>(SurfaceRemesher<Data> && )
```


### SurfaceRemesher

```cpp
public void SurfaceRemesher<Data>(const SurfaceRemesher<Data> & )
```


### operator=

```cpp
public SurfaceRemesher<Data> & operator=(const SurfaceRemesher<Data> & )
```


### operator=

```cpp
public SurfaceRemesher<Data> & operator=(SurfaceRemesher<Data> && )
```


### ~SurfaceRemesher

```cpp
public void ~SurfaceRemesher<Data>()
```


### remesh

```cpp
public RemeshedCMV remesh()
```


### treat_inactive_surface

```cpp
public void treat_inactive_surface()
```


### SurfaceRemesher

```cpp
protected void SurfaceRemesher<Data>(Data & data, const Surface<dimension> & input_surface)
```


### background_surface

```cpp
protected const Surface<dimension> & background_surface()
```


### background_mesh

```cpp
protected const TriangulatedSurface<dimension> & background_mesh()
```


### background_builder

```cpp
protected TriangulatedSurfaceBuilder<dimension> & background_builder()
```


### background_modifier

```cpp
protected TriangulatedSurfaceEpsilonModifier<dimension> & background_modifier()
```


### remeshed

```cpp
protected const SurfaceMesh<dimension> & remeshed()
```


### remeshed_builder

```cpp
protected SurfaceMeshBuilder<dimension> & remeshed_builder()
```


### metric

```cpp
protected const Metric<dimension> & metric()
```


### lock_vertices

```cpp
protected const std::vector<index_t> & lock_vertices()
```


### transfer_remeshed

```cpp
protected absl::FixedArray<index_t> transfer_remeshed(const RemeshedSurface<dimension> & remeshed)
```


### compute_remaining_adjacencies

```cpp
protected void compute_remaining_adjacencies()
```


### fill_remaining

```cpp
protected std::tuple<std::unique_ptr<TriangulatedSurface<dimension>>, absl::FixedArray<index_t>> fill_remaining(RemainingPolygon<dimension> & remaining, absl::Span<const index_t> remaining_mapping)
```


### transfer_remeshed_polygons

```cpp
protected void transfer_remeshed_polygons(const SurfaceMesh<dimension> & mesh, absl::Span<const index_t> vertex_mapping)
```


### add_remeshed_point

```cpp
protected index_t add_remeshed_point(index_t vertex)
```


### is_locked

```cpp
protected bool is_locked(index_t vertex)
```


### update_vertices

```cpp
protected void update_vertices(absl::Span<const VertexMultiMapping> mappings)
```




# class SurfaceRemesher


## Members

```cpp
public static const auto dimension

```



