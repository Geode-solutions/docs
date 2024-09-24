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

# class BRepCombiningData


## Records

Quad

Hex



## Functions

### BRepCombiningData

```cpp
public void BRepCombiningData(const BRepCombiningData & )
```


### operator=

```cpp
public BRepCombiningData & operator=(const BRepCombiningData & )
```


### BRepCombiningData

```cpp
public void BRepCombiningData(BRepCombiningData && )
```


### operator=

```cpp
public BRepCombiningData & operator=(BRepCombiningData && )
```


### BRepCombiningData

```cpp
public void BRepCombiningData(BRep & model, const class FrameFieldParameterization::ExtractedElements & elements)
```


### ~BRepCombiningData

```cpp
public void ~BRepCombiningData()
```


### model

```cpp
public const BRep & model()
```


### builder

```cpp
public BRepBuilder & builder()
```


### modifier

```cpp
public BRepCutter & modifier()
```


### unique_vertices_mapping

```cpp
public BijectiveMapping<index_t> & unique_vertices_mapping()
```


### elements

```cpp
public const class FrameFieldParameterization::ExtractedElements & elements()
```


### register_quad

```cpp
public void register_quad(const Surface3D & surface, index_t quad_id, Quad quad)
```


### nb_quads

```cpp
public index_t nb_quads(const Surface3D & surface)
```


### quad

```cpp
public const std::optional<Quad> & quad(const Surface3D & surface, index_t quad_id)
```


### register_hex

```cpp
public void register_hex(const Block3D & block, index_t hex_id, Hex hex)
```


### nb_hexes

```cpp
public index_t nb_hexes(const Block3D & block)
```


### hex

```cpp
public const std::optional<Hex> & hex(const Block3D & block, index_t hex_id)
```


### convert_to_hybrid_storage

```cpp
public void convert_to_hybrid_storage()
```


### clean

```cpp
public CleanMappings clean()
```




