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

# class StratigraphicSectionInserter


## Records

Impl



## Functions

### StratigraphicSectionInserter

```cpp
public void StratigraphicSectionInserter(const StratigraphicSection & section)
```


### ~StratigraphicSectionInserter

```cpp
public void ~StratigraphicSectionInserter()
```


### select_stratigraphic_curve_to_insert

```cpp
public void select_stratigraphic_curve_to_insert(const EdgedCurve2D & curve)
```


### insert_and_build

```cpp
public std::tuple<Section, ModelGenericMapping> insert_and_build()
```


 Returns the Merged Section including all the added curves and gives the "input to output" and "output to input" mappings between Lines



