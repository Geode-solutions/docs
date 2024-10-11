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

# class SectionExplicitModeler


## Functions

### SectionExplicitModeler

```cpp
public void SectionExplicitModeler(const SectionExplicitModeler & )
```


### operator=

```cpp
public SectionExplicitModeler & operator=(const SectionExplicitModeler & )
```


### SectionExplicitModeler

```cpp
public void SectionExplicitModeler()
```


### ~SectionExplicitModeler

```cpp
public void ~SectionExplicitModeler()
```


### select_curve_to_insert

```cpp
public void select_curve_to_insert(const EdgedCurve2D & mesh)
```


### add_section

```cpp
public void add_section(const Section & section)
```


### insert_and_build

```cpp
public tuple insert_and_build()
```


 Returns the Merged Section including all the added curves and gives the "input to output" and "output to input" mappings between Lines



