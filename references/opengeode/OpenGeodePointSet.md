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
Inherits from PointSet<dimension>
```



## Functions

### OpenGeodePointSet

```cpp
public void OpenGeodePointSet<>(const OpenGeodePointSet<> & )
```


### operator=

```cpp
public OpenGeodePointSet<> & operator=(const OpenGeodePointSet<> & )
```


### OpenGeodePointSet

```cpp
public void OpenGeodePointSet<>()
```


### OpenGeodePointSet

```cpp
public void OpenGeodePointSet<>(OpenGeodePointSet<> && other)
```


### operator=

```cpp
public OpenGeodePointSet<> & operator=(OpenGeodePointSet<> && other)
```


### ~OpenGeodePointSet

```cpp
public void ~OpenGeodePointSet<>()
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
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPointSetKey )
```




# class OpenGeodePointSet


```cpp
Inherits from PointSet<3U>
```



# class OpenGeodePointSet


```cpp
Inherits from PointSet<2U>
```



