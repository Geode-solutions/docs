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

# class BackgroundSurfaceInserter


## Functions

### BackgroundSurfaceInserter

```cpp
public void BackgroundSurfaceInserter(ModifiableBackgroundSurface surface, BackgroundSurfaceBuilder & builder)
```


### ~BackgroundSurfaceInserter

```cpp
public void ~BackgroundSurfaceInserter()
```


### insert_curve

```cpp
public ElementInsertionInfo insert_curve(const EdgedCurve2D & mesh)
```


### insert_curve_edges

```cpp
public ElementInsertionInfo insert_curve_edges(const EdgedCurve2D & mesh, absl::Span<const index_t> edges_ids)
```


### insert_point_set

```cpp
public ElementInsertionInfo insert_point_set(const PointSet2D & mesh)
```


### insert_point_set_points

```cpp
public ElementInsertionInfo insert_point_set_points(const PointSet2D & mesh, absl::Span<const index_t> vertex_ids)
```


### insert_surface

```cpp
public ElementInsertionInfo insert_surface(const TriangulatedSurface2D & mesh)
```


### insert_surface_triangles

```cpp
public ElementInsertionInfo insert_surface_triangles(const TriangulatedSurface2D & mesh, absl::Span<const index_t> triangle_ids)
```


### insert_scalar_function_isovalues

```cpp
public void insert_scalar_function_isovalues(absl::string_view function_name, absl::Span<const double> isovalues)
```




