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

# class SolidIdentifier


## Records

Impl



## Functions

### SolidIdentifier

```cpp
public void SolidIdentifier(const SolidIdentifier & )
```


### operator=

```cpp
public SolidIdentifier & operator=(const SolidIdentifier & )
```


### SolidIdentifier

```cpp
public void SolidIdentifier(SolidIdentifier && )
```


### operator=

```cpp
public SolidIdentifier & operator=(SolidIdentifier && )
```


### SolidIdentifier

```cpp
public void SolidIdentifier(const SolidMesh3D & solid)
```


### ~SolidIdentifier

```cpp
public void ~SolidIdentifier()
```


### identify_polyhedra

```cpp
public index_t identify_polyhedra()
```


### polyhedron_identifier

```cpp
public index_t polyhedron_identifier(index_t polyhedron)
```


### identified_connected_polyhedra

```cpp
public absl::FixedArray<std::vector<index_t> > identified_connected_polyhedra()
```




