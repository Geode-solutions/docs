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

# class BackgroundSolidInserter


## Records

Options



## Functions

### BackgroundSolidInserter

```cpp
public void BackgroundSolidInserter(ModifiableBackgroundSolid solid, BackgroundSolidBuilder & builder, TetrahedralSolidBuilder3D & solid_builder, const Options & options)
```


### BackgroundSolidInserter

```cpp
public void BackgroundSolidInserter(BackgroundSolidInserter && other)
```


### ~BackgroundSolidInserter

```cpp
public void ~BackgroundSolidInserter()
```


### insert_surface

```cpp
public ElementInsertionInfo insert_surface(const TriangulatedSurface3D & mesh)
```


### insert_surface_triangles

```cpp
public ElementInsertionInfo insert_surface_triangles(const TriangulatedSurface3D & mesh, absl::Span<const index_t> triangle_ids)
```


### insert_curve

```cpp
public ElementInsertionInfo insert_curve(const EdgedCurve3D & mesh)
```


### insert_curve_edges

```cpp
public ElementInsertionInfo insert_curve_edges(const EdgedCurve3D & mesh, absl::Span<const index_t> edges_ids)
```


### insert_point_set

```cpp
public ElementInsertionInfo insert_point_set(const PointSet3D & mesh)
```


### insert_point_set_points

```cpp
public ElementInsertionInfo insert_point_set_points(const PointSet3D & mesh, absl::Span<const index_t> vertex_ids)
```


### insert_scalar_function_isovalues

```cpp
public void insert_scalar_function_isovalues(std::string_view function_name, absl::Span<const double> isovalues)
```




