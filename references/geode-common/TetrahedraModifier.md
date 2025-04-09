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

# class TetrahedraModifier


## Functions

### TetrahedraModifier

```cpp
public void TetrahedraModifier(const TetrahedraModifier & )
```


### operator=

```cpp
public TetrahedraModifier & operator=(const TetrahedraModifier & )
```


### ~TetrahedraModifier

```cpp
public void ~TetrahedraModifier()
```


### updated_tetrahedron

```cpp
public const SmallSet<index_t> & updated_tetrahedron(index_t tetrahedron_id)
```


### set_updated_tetrahedron

```cpp
public void set_updated_tetrahedron(const TetrahedronMapping & mapping)
```


### TetrahedraModifier

```cpp
protected void TetrahedraModifier()
```


### TetrahedraModifier

```cpp
protected void TetrahedraModifier(TetrahedraModifier && other)
```


### operator=

```cpp
protected TetrahedraModifier & operator=(TetrahedraModifier && other)
```


### clean_tetrahedra_modifier

```cpp
protected void clean_tetrahedra_modifier()
```




