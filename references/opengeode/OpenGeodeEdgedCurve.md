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



## Records

Impl



## Functions

### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<dimension>(const OpenGeodeEdgedCurve<dimension> & )
```


### operator=

```cpp
public OpenGeodeEdgedCurve<dimension> & operator=(const OpenGeodeEdgedCurve<dimension> & )
```


### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<dimension>()
```


### OpenGeodeEdgedCurve

```cpp
public void OpenGeodeEdgedCurve<dimension>(OpenGeodeEdgedCurve<dimension> && other)
```


### operator=

```cpp
public OpenGeodeEdgedCurve<dimension> & operator=(OpenGeodeEdgedCurve<dimension> && other)
```


### ~OpenGeodeEdgedCurve

```cpp
public void ~OpenGeodeEdgedCurve<dimension>()
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


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGEdgedCurveKey )
```


### set_edge_vertex

```cpp
public void set_edge_vertex(const EdgeVertex & edge_vertex, index_t vertex_id, OGEdgedCurveKey )
```




# class OpenGeodeEdgedCurve

# class OpenGeodeEdgedCurve

