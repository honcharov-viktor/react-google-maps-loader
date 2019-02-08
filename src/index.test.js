import React from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import GoogleMapsLoader from "./index"

Enzyme.configure({adapter: new Adapter()})

const html = "Loaded"
const params = {
  key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
}

const GoogleMapsLoaderFixture = (
  <GoogleMapsLoader
    params={params}
    render={googleMaps => googleMaps && <div>{html}</div>}
  />
)

beforeAll(() => {
  const script = document.createElement("script")
  document.body.appendChild(script)
})

describe("GoogleMapsLoader", () => {
  it("renders", () => {
    mount(GoogleMapsLoaderFixture)
  })
})
