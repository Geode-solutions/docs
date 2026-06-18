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

# class OpenGeodeTriangulatedSurface


```cpp
Inherits from TriangulatedSurface<2U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodeTriangulatedSurface


```cpp
Inherits from TriangulatedSurface<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<value-parameter-0-0>(const OpenGeodeTriangulatedSurface<dimension> & )
```


### operator=

```cpp
public OpenGeodeTriangulatedSurface<dimension> & operator=(const OpenGeodeTriangulatedSurface<dimension> & )
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


### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<value-parameter-0-0>()
```


### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<value-parameter-0-0>(OpenGeodeTriangulatedSurface<dimension> && other)
```


### operator=

```cpp
public OpenGeodeTriangulatedSurface<dimension> & operator=(OpenGeodeTriangulatedSurface<dimension> && other)
```


### ~OpenGeodeTriangulatedSurface

```cpp
public void ~OpenGeodeTriangulatedSurface<value-parameter-0-0>()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGTriangulatedSurfaceKey )
```


### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id, OGTriangulatedSurfaceKey )
```


### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id, OGTriangulatedSurfaceKey )
```


### add_triangle

```cpp
public void add_triangle(const std::array<index_t, 3> & vertices, OGTriangulatedSurfaceKey )
```




# class OpenGeodeTriangulatedSurface


```cpp
Inherits from TriangulatedSurface<3U>
```



## Members

```cpp
public static const auto dim

```



