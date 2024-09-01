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



## Functions

### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<>(const OpenGeodeEdgedCurve<> & )
```


### operator=

```cpp
public OpenGeodeEdgedCurve<> & operator=(const OpenGeodeEdgedCurve<> & )
```


### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<>()
```


### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<>(OpenGeodeEdgedCurve<> && other)
```


### operator=

```cpp
public OpenGeodeEdgedCurve<> & operator=(OpenGeodeEdgedCurve<> && other)
```


### ~OpenGeodeEdgedCurve

```cpp
public void ~OpenGeodeEdgedCurve<>()
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
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
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
Inherits from EdgedCurve<3U>
```



# class OpenGeodeEdgedCurve


```cpp
Inherits from EdgedCurve<2U>
```



