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

# class OpenGeodeEdgedCurve


```cpp
Inherits from EdgedCurve<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<value-parameter-0-0>(const OpenGeodeEdgedCurve<dimension> & )
```


### operator=

```cpp
public OpenGeodeEdgedCurve<dimension> & operator=(const OpenGeodeEdgedCurve<dimension> & )
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


### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<value-parameter-0-0>()
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<value-parameter-0-0>(OpenGeodeEdgedCurve<dimension> && other)
```


### native_extension

```cpp
public std::string_view native_extension()
```


### operator=

```cpp
public OpenGeodeEdgedCurve<dimension> & operator=(OpenGeodeEdgedCurve<dimension> && other)
```


### ~OpenGeodeEdgedCurve

```cpp
public void ~OpenGeodeEdgedCurve<value-parameter-0-0>()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGEdgedCurveKey )
```


### set_edge_vertex

```cpp
public void set_edge_vertex(const EdgeVertex & edge_vertex, index_t vertex_id, OGEdgedCurveKey )
```




# class OpenGeodeEdgedCurve


```cpp
Inherits from EdgedCurve<1U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodeEdgedCurve


```cpp
Inherits from EdgedCurve<3U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodeEdgedCurve


```cpp
Inherits from EdgedCurve<2U>
```



## Members

```cpp
public static const auto dim

```



