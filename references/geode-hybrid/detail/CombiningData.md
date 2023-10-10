# class CombiningData

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#395
```

# class CombiningData

```cpp
Defined at ../include/geode/hybrid/brep/private/hybrid_combining_data.h#30
```

## Records

Quad

Hex



## Functions

### CombiningData

```cpp
public void CombiningData<DataModel>(const CombiningData<DataModel> & )
```

```cpp
Defined at ../include/geode/hybrid/brep/private/hybrid_combining_data.h#32
```

### operator=

```cpp
public CombiningData<DataModel> & operator=(const CombiningData<DataModel> & )
```

```cpp
Defined at ../include/geode/hybrid/brep/private/hybrid_combining_data.h#32
```

### CombiningData

```cpp
public void CombiningData<DataModel>(CombiningData<DataModel> && )
```

```cpp
Defined at ../include/geode/hybrid/brep/private/hybrid_combining_data.h#32
```

### operator=

```cpp
public CombiningData<DataModel> & operator=(CombiningData<DataModel> && )
```

```cpp
Defined at ../include/geode/hybrid/brep/private/hybrid_combining_data.h#32
```

### CombiningData

```cpp
public void CombiningData<DataModel>(Model & model, const class FrameFieldParameterization::ExtractedElements & elements)
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#259
```

### ~CombiningData

```cpp
public void ~CombiningData<DataModel>()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#266
```

### model

```cpp
public const Model & model()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#271
```

### builder

```cpp
public Builder & builder()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#277
```

### modifier

```cpp
public Modifier & modifier()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#283
```

### unique_vertices_mapping

```cpp
public BijectiveMapping<index_t> & unique_vertices_mapping()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#289
```

### elements

```cpp
public const class FrameFieldParameterization::ExtractedElements & elements()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#296
```

### register_quad

```cpp
public void register_quad(const Surface3D & surface, index_t quad_id, Quad quad)
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#303
```

### nb_quads

```cpp
public index_t nb_quads(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#310
```

### quad

```cpp
public const absl::optional<Quad> & quad(const Surface3D & surface, index_t quad_id)
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#317
```

### register_hex

```cpp
public void register_hex(const Block3D & block, index_t hex_id, Hex hex)
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#324
```

### nb_hexes

```cpp
public index_t nb_hexes(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#331
```

### hex

```cpp
public const absl::optional<Hex> & hex(const Block3D & block, index_t hex_id)
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#338
```

### convert_to_hybrid_storage

```cpp
public void convert_to_hybrid_storage()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#345
```

### clean

```cpp
public CleanMappings clean()
```

```cpp
Defined at /github/workspace/src/geode/hybrid/brep/private/hybrid_data.cpp#351
```



