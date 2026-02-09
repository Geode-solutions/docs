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

# class BRepImprovementSimulator


## Functions

### BRepImprovementSimulator

```cpp
public void BRepImprovementSimulator(const BRepImprovementSimulator & )
```


### operator=

```cpp
public BRepImprovementSimulator & operator=(const BRepImprovementSimulator & )
```


### BRepImprovementSimulator

```cpp
public void BRepImprovementSimulator()
```


### ~BRepImprovementSimulator

```cpp
public void ~BRepImprovementSimulator()
```


### initialize_block_simulators

```cpp
public void initialize_block_simulators(const BRep & brep)
```


### block_simulator

```cpp
public const TetrahedralSolidImprovementSimulator3D & block_simulator(const Block3D & block)
```




