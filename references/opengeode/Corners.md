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

# class Corners


 Storage class providing range loop to iterate on Corners



## Records

CornerRangeBase

CornerRange



## Functions

### Corners

```cpp
public void Corners<>(const Corners<> & )
```


### operator=

```cpp
public Corners<> & operator=(const Corners<> & )
```


### ~Corners

```cpp
public void ~Corners<>()
```


### nb_corners

```cpp
public index_t nb_corners()
```


### has_corner

```cpp
public bool has_corner(const uuid & id)
```


### corner

```cpp
public const Corner<dimension> & corner(const uuid & id)
```


 Access to an unmodifiable Corner by its unique index

### corners

```cpp
public CornerRange corners()
```


### save_corners

```cpp
public void save_corners(basic_string_view directory)
```


 Save each Corner in a file located in the specified directory

### Corners

```cpp
protected void Corners<>()
```


### Corners

```cpp
protected void Corners<>(Corners<> && other)
```


### operator=

```cpp
protected Corners<> & operator=(Corners<> && other)
```


### create_corner

```cpp
public const uuid & create_corner(CornersBuilderKey key)
```


### create_corner

```cpp
public const uuid & create_corner(const MeshImpl & impl, CornersBuilderKey key)
```


### create_corner

```cpp
public void create_corner(uuid corner_id, CornersBuilderKey key)
```


### create_corner

```cpp
public void create_corner(uuid corner_id, const MeshImpl & impl, CornersBuilderKey key)
```


### delete_corner

```cpp
public void delete_corner(const Corner<dimension> & corner, CornersBuilderKey key)
```


### load_corners

```cpp
public void load_corners(basic_string_view directory, CornersBuilderKey key)
```


### modifiable_corners

```cpp
public ModifiableCornerRange modifiable_corners(CornersBuilderKey key)
```


### modifiable_corner

```cpp
public Corner<dimension> & modifiable_corner(const uuid & id, CornersBuilderKey key)
```




# class Corners


# class Corners


