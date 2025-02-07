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

# class PolyhedralSolidBuilder


 Interface class to represent the builder of a PolyhedralSolid



```cpp
Inherits from SolidMeshBuilder<dimension>
```



## Functions

### PolyhedralSolidBuilder

```cpp
public void PolyhedralSolidBuilder<>(PolyhedralSolidBuilder<> && )
```


### create

```cpp
public std::unique_ptr<PolyhedralSolidBuilder<dimension> > create(PolyhedralSolid<dimension> & mesh)
```


 Create the builder associated with a PolyhedralSolid.

**mesh** [in] The PolyhedralSolid to build/modify

### copy

```cpp
public void copy(const PolyhedralSolid<dimension> & polyhedral_solid)
```


### PolyhedralSolidBuilder

```cpp
protected void PolyhedralSolidBuilder<>(PolyhedralSolid<dimension> & mesh)
```




# class PolyhedralSolidBuilder


```cpp
Inherits from SolidMeshBuilder<3U>
```



