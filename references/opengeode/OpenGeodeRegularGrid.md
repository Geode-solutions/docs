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



## Members

```cpp
public static const index_t dim

```



## Functions

### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid(const OpenGeodeRegularGrid<2> & )
```


### operator=

```cpp
public OpenGeodeRegularGrid<2> & operator=(const OpenGeodeRegularGrid<2> & )
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


### update_origin

```cpp
public void update_origin(const Point2D & origin, OGRegularGridKey )
```


### update_origin_and_directions

```cpp
public void update_origin_and_directions(const Point2D & origin, const std::array<Vector2D, 2> & directions, OGRegularGridKey )
```




# class OpenGeodeRegularGrid

# class OpenGeodeRegularGrid


```cpp
Inherits from RegularGrid<3>
```



## Members

```cpp
public static const index_t dim

```



## Functions

### OpenGeodeRegularGrid

```cpp
public void OpenGeodeRegularGrid(const OpenGeodeRegularGrid<3> & )
```


### operator=

```cpp
public OpenGeodeRegularGrid<3> & operator=(const OpenGeodeRegularGrid<3> & )
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


### update_origin

```cpp
public void update_origin(const Point3D & origin, OGRegularGridKey )
```


### update_origin_and_directions

```cpp
public void update_origin_and_directions(const Point3D & origin, const std::array<Vector3D, 3> & directions, OGRegularGridKey )
```




