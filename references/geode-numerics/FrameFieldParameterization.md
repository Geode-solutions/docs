# class FrameFieldParameterization


## Records

Impl



## Functions

### FrameFieldParameterization

```cpp
public void FrameFieldParameterization(const FrameField & frame_field)
```


### ~FrameFieldParameterization

```cpp
public void ~FrameFieldParameterization()
```


### compute_parameterization

```cpp
public void compute_parameterization(double mesh_size)
```


### delete_parameterization_attribute

```cpp
public void delete_parameterization_attribute()
```


### delete_singularity_attribute

```cpp
public void delete_singularity_attribute()
```


### delete_attributes

```cpp
public void delete_attributes()
```


### extract_points

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<PointSet3D> > extract_points()
```


### extract_edges

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<EdgedCurve3D> > extract_edges()
```


### extract_quadrangles

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<PolygonalSurface3D> > extract_quadrangles()
```


### extract_hexahedra

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<HybridSolid3D> > extract_hexahedra()
```




