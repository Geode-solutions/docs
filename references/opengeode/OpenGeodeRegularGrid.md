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

# class OpenGeodeRegularGrid


```cpp
Inherits from RegularGrid<2>
```



## Records

Impl



## Functions

### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid(const OpenGeodeRegularGrid<2> & )
```


### operator=

```cpp
public OpenGeodeRegularGrid<2> & operator=(const OpenGeodeRegularGrid<2> & )
```


### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid()
```


### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid(OpenGeodeRegularGrid<2> && other)
```


### operator=

```cpp
public OpenGeodeRegularGrid<2> & operator=(OpenGeodeRegularGrid<2> && other)
```


### ~OpenGeodeRegularGrid

```cpp
public void ~OpenGeodeRegularGrid()
```


### impl_name_static

```cpp
public NamedType impl_name_static()
```


### impl_name

```cpp
public NamedType impl_name()
```


### type_name

```cpp
public NamedType type_name()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### update_origin

```cpp
public void update_origin(const Point2D & origin, OGRegularGridKey )
```


### update_origin_and_directions

```cpp
public void update_origin_and_directions(const Point2D & origin, const std::array<Vector2D, 2> & directions, OGRegularGridKey )
```


### cell_indices

```cpp
public Grid2D::CellIndices cell_indices(index_t index)
```


### vertex_indices

```cpp
public Grid2D::VertexIndices vertex_indices(index_t index)
```


### get_polygon_adjacent

```cpp
public absl::optional<index_t> get_polygon_adjacent(const PolygonEdge & edge)
```




# class OpenGeodeRegularGrid

# class OpenGeodeRegularGrid


```cpp
Inherits from RegularGrid<3>
```



## Records

Impl



## Functions

### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid(const OpenGeodeRegularGrid<3> & )
```


### operator=

```cpp
public OpenGeodeRegularGrid<3> & operator=(const OpenGeodeRegularGrid<3> & )
```


### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid()
```


### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid(OpenGeodeRegularGrid<3> && other)
```


### operator=

```cpp
public OpenGeodeRegularGrid<3> & operator=(OpenGeodeRegularGrid<3> && other)
```


### ~OpenGeodeRegularGrid

```cpp
public void ~OpenGeodeRegularGrid()
```


### impl_name_static

```cpp
public NamedType impl_name_static()
```


### impl_name

```cpp
public NamedType impl_name()
```


### type_name

```cpp
public NamedType type_name()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### update_origin

```cpp
public void update_origin(const Point3D & origin, OGRegularGridKey )
```


### update_origin_and_directions

```cpp
public void update_origin_and_directions(const Point3D & origin, const std::array<Vector3D, 3> & directions, OGRegularGridKey )
```


### cell_indices

```cpp
public Grid3D::CellIndices cell_indices(index_t index)
```


### vertex_indices

```cpp
public Grid3D::VertexIndices vertex_indices(index_t index)
```


### get_polyhedron_adjacent

```cpp
public absl::optional<index_t> get_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```




