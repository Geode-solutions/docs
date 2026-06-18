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

# class OpenGeodePolygonalSurface


```cpp
Inherits from PolygonalSurface<3U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodePolygonalSurface


```cpp
Inherits from PolygonalSurface<2U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodePolygonalSurface


```cpp
Inherits from PolygonalSurface<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<value-parameter-0-0>(const OpenGeodePolygonalSurface<dimension> & )
```


### operator=

```cpp
public OpenGeodePolygonalSurface<dimension> & operator=(const OpenGeodePolygonalSurface<dimension> & )
```


### impl_name_static

```cpp
public static MeshImpl impl_name_static()
```


### impl_name

```cpp
public MeshImpl impl_name()
```


### type_name

```cpp
public MeshType type_name()
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<value-parameter-0-0>()
```


### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<value-parameter-0-0>(OpenGeodePolygonalSurface<dimension> && other)
```


### operator=

```cpp
public OpenGeodePolygonalSurface<dimension> & operator=(OpenGeodePolygonalSurface<dimension> && other)
```


### ~OpenGeodePolygonalSurface

```cpp
public void ~OpenGeodePolygonalSurface<value-parameter-0-0>()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPolygonalSurfaceKey )
```


### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id, OGPolygonalSurfaceKey )
```


### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id, OGPolygonalSurfaceKey )
```


### add_polygon

```cpp
public void add_polygon(absl::Span<const index_t> vertices, OGPolygonalSurfaceKey )
```


### remove_polygons

```cpp
public void remove_polygons(const std::vector<bool> & to_delete, OGPolygonalSurfaceKey )
```


### permute_polygons

```cpp
public void permute_polygons(absl::Span<const index_t> permutation, OGPolygonalSurfaceKey )
```


### copy_polygons

```cpp
public void copy_polygons(const OpenGeodePolygonalSurface<dimension> & surface_mesh, OGPolygonalSurfaceKey )
```




