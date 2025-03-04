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

# class BRepVolumicInserter


## Functions

### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(const BRepVolumicInserter & )
```


### operator=

```cpp
public BRepVolumicInserter & operator=(const BRepVolumicInserter & )
```


### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(BRep && brep)
```


### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(BRepVolumicInserter && inserter)
```


### ~BRepVolumicInserter

```cpp
public void ~BRepVolumicInserter()
```


### add_scalar_isovalues

```cpp
public void add_scalar_isovalues(basic_string_view scalar_function_name, Span scalar_function_values)
```


### build

```cpp
public tuple build()
```


 Returns a new BRep with all the isovalues inserted as surfaces and the topology rebuilt. Also gives the "input to output" and "output to input" mappings between given and new BRep. Only the attributes marked as interpolable will be interpolated along the inserted surfaces.



