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

# class HybridSolid


```cpp
Inherits from SolidMesh<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### create

```cpp
public static std::unique_ptr<HybridSolid<dimension>> create()
```


 Create a new HybridSolid using default data structure.

### HybridSolid

```cpp
public void HybridSolid<value-parameter-0-0>(const HybridSolid<dimension> & )
```


### operator=

```cpp
public HybridSolid<dimension> & operator=(const HybridSolid<dimension> & )
```


### create

```cpp
public static std::unique_ptr<HybridSolid<dimension>> create(const MeshImpl & impl)
```


 Create a new HybridSolid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public static MeshType type_name_static()
```


### clone

```cpp
public std::unique_ptr<HybridSolid<dimension>> clone()
```


### HybridSolid

```cpp
protected void HybridSolid<value-parameter-0-0>()
```


### HybridSolid

```cpp
protected void HybridSolid<value-parameter-0-0>(HybridSolid<dimension> && other)
```


### operator=

```cpp
protected HybridSolid<dimension> & operator=(HybridSolid<dimension> && other)
```


### polyhedron_type

```cpp
public TYPE polyhedron_type(index_t polyhedron_id)
```



## Enums

| enum class TYPE |

--

| tetrahedron |
| hexahedron |
| prism |
| pyramid |





# class HybridSolid


```cpp
Inherits from SolidMesh<3U>
```



## Members

```cpp
public static const auto dim

```



