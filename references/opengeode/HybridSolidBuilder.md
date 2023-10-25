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

# class HybridSolidBuilder


```cpp
Inherits from SolidMeshBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<HybridSolidBuilder<dimension> > create(HybridSolid<dimension> & mesh)
```


### create_tetrahedron

```cpp
public index_t create_tetrahedron(const std::array<index_t, 4> & vertices)
```


 Create a new tetrahedron from four vertices.

**vertices** [in] The four vertices defining the tetrahedron to create

**return** the index of the created tetrahedron

### create_hexahedron

```cpp
public index_t create_hexahedron(const std::array<index_t, 8> & vertices)
```


 Create a new hexahedron from four vertices.

**vertices** [in] The eight vertices defining the hexahedron to create

**return** the index of the created hexahedron

### create_prism

```cpp
public index_t create_prism(const std::array<index_t, 6> & vertices)
```


 Create a new prism from four vertices.

**vertices** [in] The six vertices defining the prism to create

**return** the index of the created prism

### create_pyramid

```cpp
public index_t create_pyramid(const std::array<index_t, 5> & vertices)
```


 Create a new pyramid from four vertices.

**vertices** [in] The five vertices defining the pyramid to create

**return** the index of the created pyramid

### copy

```cpp
public void copy(const HybridSolid<dimension> & hybrid_solid)
```


### HybridSolidBuilder

```cpp
protected void HybridSolidBuilder<dimension>(HybridSolid<dimension> & mesh)
```




# class HybridSolidBuilder


```cpp
Inherits from SolidMeshBuilder<3U>
```



