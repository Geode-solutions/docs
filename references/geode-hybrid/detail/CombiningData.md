# class CombiningData

# class CombiningData

## Records

Quad

Hex

## Functions

### CombiningData

```cpp
public void CombiningData<DataModel>(const CombiningData<DataModel> & )
```

### operator=

```cpp
public CombiningData<DataModel> & operator=(const CombiningData<DataModel> & )
```

### CombiningData

```cpp
public void CombiningData<DataModel>(CombiningData<DataModel> && )
```

### operator=

```cpp
public CombiningData<DataModel> & operator=(CombiningData<DataModel> && )
```

### CombiningData

```cpp
public void CombiningData<DataModel>(Model & model, const class FrameFieldParameterization::ExtractedElements & elements)
```

### ~CombiningData

```cpp
public void ~CombiningData<DataModel>()
```

### model

```cpp
public const Model & model()
```

### builder

```cpp
public Builder & builder()
```

### modifier

```cpp
public Modifier & modifier()
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
public const absl::optional<Quad> & quad(const Surface3D & surface, index_t quad_id)
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
public const absl::optional<Hex> & hex(const Block3D & block, index_t hex_id)
```

### convert_to_hybrid_storage

```cpp
public void convert_to_hybrid_storage()
```

### clean

```cpp
public CleanMappings clean()
```
