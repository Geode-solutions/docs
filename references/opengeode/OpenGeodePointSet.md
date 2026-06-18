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

# class OpenGeodePointSet


```cpp
Inherits from PointSet<1U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodePointSet


```cpp
Inherits from PointSet<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### OpenGeodePointSet

```cpp
public void OpenGeodePointSet<value-parameter-0-0>(const OpenGeodePointSet<dimension> & )
```


### operator=

```cpp
public OpenGeodePointSet<dimension> & operator=(const OpenGeodePointSet<dimension> & )
```


### impl_name_static

```cpp
public static MeshImpl impl_name_static()
```


### impl_name

```cpp
public MeshImpl impl_name()
```


### OpenGeodePointSet

```cpp
public void OpenGeodePointSet<value-parameter-0-0>()
```


### type_name

```cpp
public MeshType type_name()
```


### OpenGeodePointSet

```cpp
public void OpenGeodePointSet<value-parameter-0-0>(OpenGeodePointSet<dimension> && other)
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### operator=

```cpp
public OpenGeodePointSet<dimension> & operator=(OpenGeodePointSet<dimension> && other)
```


### ~OpenGeodePointSet

```cpp
public void ~OpenGeodePointSet<value-parameter-0-0>()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPointSetKey )
```




# class OpenGeodePointSet


```cpp
Inherits from PointSet<3U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodePointSet


```cpp
Inherits from PointSet<2U>
```



## Members

```cpp
public static const auto dim

```



