# namespace detail

## Records

- [CombiningData](CombiningData.md)
- [HybridSamplingData](HybridSamplingData.md)
- [InsertedVertices](InsertedVertices.md)

## Functions

### sample_lines

```cpp
void sample_lines(BRepHybridSamplingData & data)
```

### sample_blocks

```cpp
void sample_blocks(BRepHybridSamplingData & data)
```

### combining_blocks

```cpp
void combining_blocks(BRepCombiningData & data)
```

### build_blocks_hexes

```cpp
void build_blocks_hexes(BRepCombiningData & data)
```

### sample_corners

```cpp
void sample_corners(BRepHybridSamplingData & data)
```

### compute_elements

```cpp
ExtractedElements compute_elements(BRep & brep, const ConstantMetric3D & metric)
```

### sample_surfaces

```cpp
void sample_surfaces(BRepHybridSamplingData & data)
```

### combining_surfaces

```cpp
void combining_surfaces(BRepCombiningData & data)
```

### build_surfaces_quads

```cpp
void build_surfaces_quads(BRepCombiningData & data)
```
