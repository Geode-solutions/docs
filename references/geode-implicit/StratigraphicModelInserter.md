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

# class StratigraphicModelInserter


## Functions

### StratigraphicModelInserter

```cpp
public void StratigraphicModelInserter(const StratigraphicModel & model)
```


### ~StratigraphicModelInserter

```cpp
public void ~StratigraphicModelInserter()
```


### select_stratigraphic_surface_to_insert

```cpp
public void select_stratigraphic_surface_to_insert(const TriangulatedSurface3D & surface)
```


### insert_and_build

```cpp
public tuple insert_and_build()
```


 Returns the Merged BRep including, in the xyz space, the ImplicitModel surfaces and all the added surfaces, and gives the "input to output" and "output to input" mappings between Surfaces



